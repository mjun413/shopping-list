function addNewItem(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(generateNewItemList(newItemName));
    $('.js-shopping-list-entry').val('');
  });
}

function generateNewItemList(newItemName){
   return `
    <li>
      <span class="shopping-item">${newItemName}</span>
      <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
      </div>
    </li>`
}

// function pushNewItemToList(newItemName) {
//   $('.shopping-list').append(generateNewItemList);
// }



function checkItemToggle() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
   $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  
}

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove();
  });
}

function shoppingList(){
  addNewItem();
  checkItemToggle();
  deleteItem();
}

$(shoppingList);