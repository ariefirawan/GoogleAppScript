const url =
  'https://script.google.com/macros/s/AKfycbxaLM0yHFnCtefF-55uDvW1FgkK24oCgriIHQOb658m9H3_WUbvDzxgQwWHpNiKhIXg/exec';

function getApi() {
  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      document.getElementById('app').textContent = r[0].status;
    });
}

document.getElementById('btn').addEventListener('click', getApi);
