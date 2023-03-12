<!doctype html>
<html class="no-js" lang="en">

    <head>
        @include('client.inc.head')
    </head>

    <body>
        <div class="main-wrapper">
            @include('client.inc.header')

            <div id="wrapper">
                @yield('main-body')
            </div>
            @include('client.inc.footer')
            <!-- JS
============================================ -->
            @include('client.inc.script')
    </body>

</html>
