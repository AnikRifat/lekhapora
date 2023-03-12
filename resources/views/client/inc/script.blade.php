<!-- Modernizer JS -->
<script src="assets/js/vendor/modernizr.min.js"></script>
<!-- jQuery JS -->
<script src="assets/js/vendor/jquery.js"></script>
<script src="assets/js/vendor/bootstrap.min.js"></script>
<script src="assets/js/vendor/sal.min.js"></script>
<script src="assets/js/vendor/backtotop.js"></script>
<script src="assets/js/vendor/magnifypopup.js"></script>
<script src="assets/js/vendor/slick.js"></script>
<script src="assets/js/vendor/countdown.js"></script>
<script src="assets/js/vendor/jquery-appear.js"></script>
<script src="assets/js/vendor/odometer.js"></script>
<script src="assets/js/vendor/isotop.js"></script>
<script src="assets/js/vendor/imageloaded.js"></script>
<script src="assets/js/vendor/lightbox.js"></script>
<script src="assets/js/vendor/wow.js"></script>
<script src="assets/js/vendor/paralax.min.js"></script>
<script src="assets/js/vendor/paralax-scroll.js"></script>
<script src="assets/js/vendor/jquery-ui.js"></script>
<script src="assets/js/vendor/tilt.jquery.min.js"></script>
<!-- Main JS -->
<script src="assets/js/main.js"></script>


<script>
    $(document).ready(() => {
        $('.btn-teacher').click(() => {
            $('.btn-teacher').addClass('d-none');
            $('.form-student').addClass('d-none');
            $('.form-teacher').removeClass('d-none');
            $('.btn-student').removeClass('d-none');
        });
        $('.btn-student').click(() => {
            $('.form-student').removeClass('d-none');
            $('.form-teacher').addClass('d-none');
            $('.btn-student').addClass('d-none');
            $('.btn-teacher').removeClass('d-none');

        });
    });
</script>