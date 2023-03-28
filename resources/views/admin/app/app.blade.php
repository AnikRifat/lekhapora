<!DOCTYPE html>
<html lang="en">

    @include('client.inc.head')

    <body class="theme-primary">
        @include('client.inc.header')

        {{-- <div id="main-body"> --}}
        @yield('main-body')
        {{-- </div> --}}
        @include('client.inc.footer')

        <!-- JS
============================================ -->
        @include('client.inc.script')
    </body>

</html>