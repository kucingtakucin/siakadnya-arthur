$(document).ready(function () {
    $('#insertModal2').modal('show')
    $('#deleteModal1').modal('show')
    $('#deleteModal2').modal('show')
    $('#updateModal1').modal('show')
    $('#updateModal2').modal('show')

    $('#search').keyup(function () {
        $('#loader').removeClass('d-none')
        // $('#table-mahasiswa').load(`ajax/mahasiswa.php?keyword=${$('#search').val()}`)
        $.get(`ajax/mahasiswa.php?keyword=${$('#search').val()}`, function (data) {
            $('#table-mahasiswa').html(data)
            $('#loader').addClass('d-none')
        })
    })
    $('#search-button').hide()
})