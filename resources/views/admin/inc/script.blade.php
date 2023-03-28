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

<!-- Vendor JS -->
<script src="assets/client/js/vendors.min.js"></script>
<!-- Corenav Master JavaScript -->
<script src="assets/client/corenav-master/coreNavigation-1.1.3.js"></script>
<script src="assets/client/js/nav.js"></script>
<script src="assets/client/vendor_components/OwlCarousel2/dist/owl.carousel.js"></script>
<script src="assets/client/vendor_components/bootstrap-select/dist/js/bootstrap-select.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js"
  integrity="sha512-2bMhOkE/ACz21dJT8zBOMgMecNxx0d37NND803ExktKiKdSzdwn+L7i9fdccw/3V06gM/DBWKbYmQvKMdAA9Nw=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- EduLearn front end -->
<script src="assets/client/js/template.js"></script>


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

