<header class="top-bar text-dark">


    <nav class="nav-dark nav-transparent">
        <div class="nav-header">
            <a href="{{ url('/') }}" class="brand">
                <img src="assets/client/images//logo-light-text5.png" alt="" />
            </a>
            <button class="toggle-bar">
                <span class="ti-menu"></span>
            </button>
        </div>
        <ul class="menu">
            <li>
                <a href="{{ url('/') }}">Home</a>
            </li>

            <li class="dropdown">
                <a href="#">Courses</a>
                <ul class="dropdown-menu">
                    <li><a href="courses_list.html">Courses List</a></li>
                    <li><a href="courses_list_right_sidebar.html">Courses List Right Sidebar</a></li>
                    <li><a href="courses_list-map.html">Courses with Map</a></li>
                    <li><a href="courses_categories.html">Courses Categories</a></li>
                    <li><a href="courses_details.html">Courses Details</a></li>
                    <li><a href="courses_details_right_sidebar.html">Courses Details right sidebar</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">Shop</a>
                <ul class="dropdown-menu">
                    <li><a href="shop.html">Shop Grid</a></li>
                    <li><a href="shop-cart.html">Shop Cart</a></li>
                    <li><a href="shop-checkout.html">Shop Checkout</a></li>
                    <li><a href="shop-details.html">Shop Details</a></li>
                    <li><a href="shop-orders.html">Shop Orders</a></li>
                </ul>
            </li>
            <li>
                <a href="about.html">About</a>
            </li>
            <li>
                <a href="contact_us.html">Contact</a>
            </li>
        </ul>
        <ul class="attributes">
            @if (Auth::user())

            <li class="d-md-block d-none">
                <form id="logout" action="{{ route('logout') }}" method="Post">
                    <button type="submit" class="btn-danger rounded-0">Logout</button>
                    @csrf
                </form>
            </li>
            @else
            <li class="d-md-block d-none"><a href="{{ route('login') }}" class="px-10 pt-15 pb-10">
                    <div class="btn btn-primary py-5">Login / Register Now</div>
                </a></li>
            @endif

            <li><a href="#" class="toggle-search-fullscreen"><span class="ti-search"></span></a></li>
            <li class="megamenu" data-width="270">
                <a href="#"><span class="ti-shopping-cart"></span></a>
                <div class="megamenu-content megamenu-cart">
                    <!-- Start Shopping Cart -->
                    <div class="cart-header">
                        <div class="total-price">
                            Total: <span>$2,432.93</span>
                        </div>
                        <i class="ti-shopping-cart"></i>
                        <span class="badge">3</span>
                    </div>
                    <div class="cart-body">
                        <ul>
                            <li>
                                <img src="assets/client/images//front-end-img/product/product-1.png" alt="">
                                <h5 class="title">Lorem ipsum dolor</h5>
                                <span class="qty">Quantity: 02</span>
                                <span class="price-st">$843,12</span>
                                <a href="#" class="link"></a>
                            </li>
                            <li>
                                <img src="assets/client/images//front-end-img/product/product-2.png" alt="">
                                <h5 class="title">Lorem ipsum dolor</h5>
                                <span class="qty">Quantity: 02</span>
                                <span class="price-st">$843,12</span>
                                <a href="#" class="link"></a>
                            </li>
                            <li>
                                <img src="assets/client/images//front-end-img/product/product-3.png" alt="">
                                <h5 class="title">Lorem ipsum dolor</h5>
                                <span class="qty">Quantity: 02</span>
                                <span class="price-st">$843,12</span>
                                <a href="#" class="link"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="cart-footer">
                        <a href="#">Checkout</a>
                    </div>
                    <!-- End Shopping Cart -->
                </div>
            </li>
        </ul>

        <div class="wrap-search-fullscreen">
            <div class="container">
                <button class="close-search"><span class="ti-close"></span></button>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    </nav>
</header>