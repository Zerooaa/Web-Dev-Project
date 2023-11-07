<script>
$(document).ready(function () {
  $('.nav-area li').on('click', function () {
    // Remove the 'active' class from all list items
    $('.nav-area li').removeClass('active'); 
    // Add the 'active' class to the clicked list item
    $(this).addClass('active');
  }) 
});
</script>