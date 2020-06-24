M.Sidenav.init(document.querySelector('.sidenav'));
M.FormSelect.init(document.querySelector('#status'));

if (window.location.href.split('/').includes('edit') || window.location.href.split('/').includes('add')) {
  CKEDITOR.replace('body', {
    plugins: 'wysiwygarea, toolbar, basicstyles, link'
  });
}
