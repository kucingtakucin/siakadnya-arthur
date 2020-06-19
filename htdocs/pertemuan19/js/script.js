$(document).ready(function () {
    $('#insertModal2').modal('show')
    $('#deleteModal1').modal('show')
    $('#deleteModal2').modal('show')
    $('#updateModal1').modal('show')
    $('#updateModal2').modal('show')
    function ajax(method, url, success, error){
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    success(this)
                } else if (this.status === 403 || this.status === 404) {
                    error(this)
                }
            }
        }
        xhr.open(method, url, true)
        xhr.send()
    }
    const search = document.getElementById('search')
    const button = document.getElementById('search-button')
    const tableMahasiswa = document.getElementById('table-mahasiswa')
    search.addEventListener('keyup', function () {
        ajax('GET',`ajax/mahasiswa.php?keyword=${search.value}`,function (results) {
            tableMahasiswa.innerHTML = results.response;
            console.log(results)
        }, function (results) {
            tableMahasiswa.innerHTML = results.response;
        })
    });
})

