<!-- StatewideCarCarriers.vue -->
<template>
  <div class="page" :style="{ '--banner-h': showBanner ? bannerHeight + 'px' : '0px' }">
    <!-- Transition Loader (shows on every refresh / initial load) -->
    <transition name="fade">
      <div v-if="loading" class="loader">
        <div class="loaderInner">
          <div class="spinner" />
          <div class="loaderText">Loading Statewide Car Carriers</div>
        </div>
      </div>
    </transition>

    <!-- Top Demo Banner (closable) -->
    <transition name="slideDown">
      <div v-if="showBanner" ref="bannerRef" class="banner">
        <div class="bannerInner">
          <div class="bannerLeft">
            <span class="pill">Demo</span>
            <span class="bannerText">
              This is a mockup concept website for presentation only. All content is placeholder unless stated otherwise.
            </span>
          </div>
          <button class="iconBtn" @click="closeBanner" aria-label="Close disclaimer">
            <svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
              <path
                d="M18 6 6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Header / Nav -->
    <header ref="headerRef" class="header" :class="{ scrolled: isScrolled }">
      <nav class="nav">
        <a class="brand" href="#home" @click.prevent="go('home', true)">
          <span class="brandIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="icon">
              <path
                d="M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10H6a3 3 0 0 1-3-3V7Z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M15 10h3.2a2 2 0 0 1 1.7 1l1.1 2a2 2 0 0 1 .3 1v3h-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </span>
          <span class="brandText">
            <span class="brandName">Statewide Car Carriers</span>
            <span class="brandSub">Family-owned since 1990</span>
          </span>
        </a>

        <button class="hamburger" @click="toggleMobile" aria-label="Open menu" :aria-expanded="mobileOpen">
          <span />
          <span />
          <span />
        </button>

        <div class="links" :class="{ open: mobileOpen }">
          <a href="#home" @click.prevent="go('home', true)">Home</a>
          <a href="#services" @click.prevent="go('services', true)">Services</a>
          <a href="#coverage" @click.prevent="go('coverage', true)">Coverage</a>
          <a href="#about" @click.prevent="go('about', true)">About</a>
          <a href="#contact" @click.prevent="go('contact', true)" class="btnPrimary">Contact</a>
        </div>
      </nav>

      <!-- Mobile menu backdrop -->
      <transition name="fade">
        <div v-if="mobileOpen" class="backdrop" @click="closeMobile" />
      </transition>
    </header>

    <!-- HOME / HERO (Full viewport) -->
    <section id="home" class="hero">
      <div class="heroBg" aria-hidden="true" />
      <div class="container heroGrid">
        <div class="heroCopy">
          <h1>
            Trusted Car Transport<br />
            Across Australia’s East Coast
          </h1>

          <p class="lead">
            We’re a family-owned car carrying company based in Somersby. We operate primarily up the East Coast of NSW
            and regularly service interstate routes such as Melbourne to Brisbane via Sydney.
          </p>

          <div class="ctaRow">
            <a class="btnPrimary big" href="#contact" @click.prevent="go('contact', true)">Get a Free Quote</a>
            <a class="btnOutline big" :href="`tel:${phoneDial}`">Call Us Now</a>
          </div>

          <div class="miniFeatures">
            <div class="mini">
              <div class="miniIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M12 2 4 6v6c0 5 3 9 8 10 5-1 8-5 8-10V6l-8-4Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="miniText">
                <div class="miniTitle">Fully Insured</div>
                <div class="miniSub">Peace of mind</div>
              </div>
            </div>

            <div class="mini">
              <div class="miniIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M12 8v5l3 2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="miniText">
                <div class="miniTitle">On-Time Delivery</div>
                <div class="miniSub">Reliable scheduling</div>
              </div>
            </div>

            <div class="mini">
              <div class="miniIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="miniText">
                <div class="miniTitle">Door-to-Door</div>
                <div class="miniSub">Pickup & delivery</div>
              </div>
            </div>
          </div>
        </div>

        <div class="heroMedia">
          <div class="mediaCard">
            <div class="mediaImg" aria-label="Hero image placeholder" />
            <div class="badge">
              <div class="badgeBig">36+</div>
              <div class="badgeSmall">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
      <div class="heroBottomFade" aria-hidden="true" />
    </section>

    <!-- SERVICES -->
    <section id="services" class="section">
      <div class="container">
        <div class="sectionHead">
          <h2>Our Services</h2>
          <p>Comprehensive car carrier solutions tailored to your needs</p>
        </div>

        <div class="grid2">
          <div class="card service">
            <div class="cardIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10H6a3 3 0 0 1-3-3V7Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 10h3.2a2 2 0 0 1 1.7 1l1.1 2a2 2 0 0 1 .3 1v3h-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Personal Vehicle Transport</h3>
            <p>Safe and secure transport for your personal vehicles, from sedans to luxury cars.</p>
            <ul class="bullets">
              <li>Door-to-door service</li>
              <li>Fully insured</li>
              <li>Real-time updates</li>
            </ul>
          </div>

          <div class="card service">
            <div class="cardIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M8 7h8M8 11h8M8 15h8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h3>Dealership Services</h3>
            <p>Reliable fleet transport for dealerships with scheduled runs and priority options.</p>
            <ul class="bullets">
              <li>Bulk transport rates</li>
              <li>Flexible scheduling</li>
              <li>Trade plate service</li>
            </ul>
          </div>

          <div class="card service">
            <div class="cardIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 9h6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>Interstate Relocations</h3>
            <p>Vehicle transport on major routes including Melbourne–Sydney–Brisbane corridor.</p>
            <ul class="bullets">
              <li>Express options</li>
              <li>Competitive pricing</li>
              <li>End-to-end coordination</li>
            </ul>
          </div>

          <div class="card service">
            <div class="cardIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M16 11a4 4 0 1 0-8 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 20a7 7 0 0 1 18 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M10 12h4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>Corporate Fleet</h3>
            <p>Comprehensive solutions for corporate relocations and fleet movements across the East Coast.</p>
            <ul class="bullets">
              <li>Account management</li>
              <li>Volume discounts</li>
              <li>Dedicated support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- COVERAGE (Dark section) -->
    <section id="coverage" class="coverage">
      <div class="container coverageGrid">
        <div class="coverageCopy">
          <div class="eyebrow">
            <span class="eyebrowIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </span>
            <h2>Service Coverage</h2>
          </div>

          <p class="coverageLead">
            Based in Somersby, NSW, we primarily operate along Australia’s East Coast with regular interstate services.
            Our network supports reliable and timely delivery.
          </p>

          <div class="routesCard">
            <div class="routesTitle">
              <svg viewBox="0 0 24 24" class="icon sm">
                <path
                  d="M4 6h16M4 12h10M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span>Popular Routes</span>
            </div>

            <div class="routesGrid">
              <div class="route">
                <span class="dot" /> Sydney to Brisbane
              </div>
              <div class="route">
                <span class="dot" /> Melbourne to Sydney
              </div>
              <div class="route">
                <span class="dot" /> Melbourne to Brisbane
              </div>
              <div class="route">
                <span class="dot" /> Newcastle to Sydney
              </div>
              <div class="route">
                <span class="dot" /> Wollongong to Sydney
              </div>
              <div class="route">
                <span class="dot" /> Canberra to Sydney
              </div>
            </div>
          </div>

          <div class="coverageBadges">
            <div class="chip">
              <div class="chipTop">Primary Coverage</div>
              <div class="chipBig">East Coast NSW</div>
            </div>
            <div class="chip">
              <div class="chipTop">Interstate Routes</div>
              <div class="chipBig">MEL–SYD–BNE</div>
            </div>
          </div>
        </div>

        <div class="coverageMedia">
          <div class="coverImg" />
          <div class="coverStat">
            <div class="coverBig">1000+ km</div>
            <div class="coverSmall">Regular Service Routes</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section soft">
      <div class="container">
        <div class="sectionHead">
          <h2>About Statewide Car Carriers</h2>
          <p>
            Since 1985, we’ve been providing trusted vehicle transport services across Australia’s East Coast. We are a
            family-owned business specializing in vehicle transport since that time, with the business name officially
            registered on March 17, 2000.
          </p>
        </div>

        <div class="values">
          <div class="value">
            <div class="valueIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="valueTitle">Family Values</div>
            <div class="valueText">We treat every customer like family and every vehicle like our own.</div>
          </div>

          <div class="value">
            <div class="valueIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.2L12 17.8 6.4 19.5l1.1-6.2L3 8.9 9 8l3-6Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="valueTitle">Quality Service</div>
            <div class="valueText">Decades of experience delivering excellence in vehicle transport.</div>
          </div>

          <div class="value">
            <div class="valueIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M16 11a4 4 0 1 0-8 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M3 20a7 7 0 0 1 18 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="valueTitle">Professional Team</div>
            <div class="valueText">Experienced drivers and support staff focused on safe, timely delivery.</div>
          </div>

          <div class="value">
            <div class="valueIcon">
              <svg viewBox="0 0 24 24" class="icon">
                <path
                  d="M4 14l4-4 4 4 8-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 20h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="valueTitle">Continuous Growth</div>
            <div class="valueText">We invest in modern equipment and training to provide better service.</div>
          </div>
        </div>

        <div class="why">
          <div class="whyMedia" aria-label="About image placeholder" />
          <div class="whyCard">
            <h3>Why Choose Us?</h3>
            <ol class="whyList">
              <li>
                <span class="num">1</span>
                <div>
                  <div class="whyTitle">Local Knowledge</div>
                  <div class="whyText">Based in Somersby with strong understanding of East Coast routes and logistics.</div>
                </div>
              </li>
              <li>
                <span class="num">2</span>
                <div>
                  <div class="whyTitle">Proven Track Record</div>
                  <div class="whyText">Decades of successful deliveries with consistent, careful handling.</div>
                </div>
              </li>
              <li>
                <span class="num">3</span>
                <div>
                  <div class="whyTitle">Competitive Pricing</div>
                  <div class="whyText">Transparent quotes with practical options for different schedules.</div>
                </div>
              </li>
              <li>
                <span class="num">4</span>
                <div>
                  <div class="whyTitle">Customer First</div>
                  <div class="whyText">Clear communication and support throughout the entire transport process.</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <div class="sectionHead">
          <h2>Get in Touch</h2>
          <p>Ready to transport your vehicle? Contact us for a free, no-obligation quote.</p>
        </div>

        <div class="contactGrid">
          <div class="contactLeft">
            <h3>Contact Information</h3>

            <div class="infoRow">
              <div class="infoIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.2 10.8 19.8 19.8 0 0 1 .1 2.2 2 2 0 0 1 2.1 0h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L6 8a16 16 0 0 0 10 10l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6A2 2 0 0 1 22 16.9Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div class="infoTitle">Phone</div>
                <a class="infoLink" :href="`tel:${phoneDial}`">(02) 4377 7000</a>
                <div class="infoSub">Call us for immediate assistance</div>
              </div>
            </div>

            <div class="infoRow">
              <div class="infoIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M4 4h16v16H4V4Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="m4 6 8 7 8-7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div class="infoTitle">Email</div>
                <a class="infoLink" :href="`mailto:${email}`">{{ email }}</a>
                <div class="infoSub">We’ll respond within 24 hours</div>
              </div>
            </div>

            <div class="infoRow">
              <div class="infoIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div>
                <div class="infoTitle">Location</div>
                <div class="infoText">376 Wisemans Ferry Rd, Somersby NSW 2250, Australia</div>
                <div class="infoSub">Servicing East Coast & Interstate</div>
              </div>
            </div>

            <div class="infoRow">
              <div class="infoIcon">
                <svg viewBox="0 0 24 24" class="icon">
                  <path
                    d="M12 8v5l3 2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div>
                <div class="infoTitle">Business Hours</div>
                <div class="infoText">Mon–Fri: 7:00 AM – 6:00 PM</div>
                <div class="infoText">Sat: 8:00 AM – 2:00 PM</div>
                <div class="infoSub">Emergency support available</div>
              </div>
            </div>

            <div class="quoteBox">
              <div class="quoteTitle">Request a Quote</div>
              <div class="quoteText">Fill out our quick quote form and we’ll get back to you with a competitive price.</div>
              <ul class="quoteBullets">
                <li>Free, no-obligation quotes</li>
                <li>Competitive pricing</li>
                <li>Fast response time</li>
              </ul>
            </div>
          </div>

          <div class="contactRight">
            <div class="formCard">
              <div class="formTitle">Quick Quote Form</div>

              <form @submit.prevent="submit">
                <div class="field">
                  <label>Full Name <span class="req">*</span></label>
                  <input v-model.trim="form.name" type="text" placeholder="John Smith" required />
                </div>

                <div class="field">
                  <label>Email Address <span class="req">*</span></label>
                  <input v-model.trim="form.email" type="email" placeholder="john@example.com" required />
                </div>

                <div class="field">
                  <label>Phone Number <span class="req">*</span></label>
                  <input v-model.trim="form.phone" type="tel" placeholder="0412 345 678" required />
                </div>

                <div class="row2">
                  <div class="field">
                    <label>Pickup Location <span class="req">*</span></label>
                    <input v-model.trim="form.pickup" type="text" placeholder="Sydney, NSW" required />
                  </div>
                  <div class="field">
                    <label>Delivery Location <span class="req">*</span></label>
                    <input v-model.trim="form.dropoff" type="text" placeholder="Brisbane, QLD" required />
                  </div>
                </div>

                <div class="field">
                  <label>Vehicle Details</label>
                  <input v-model.trim="form.vehicle" type="text" placeholder="e.g., 2020 Toyota Camry" />
                </div>

                <div class="field">
                  <label>Additional Information</label>
                  <textarea v-model.trim="form.notes" rows="4" placeholder="Any special requirements or questions…" />
                </div>

                <button class="btnPrimary full" type="submit">Request Free Quote</button>

                <transition name="fade">
                  <div v-if="toast" class="toast">{{ toast }}</div>
                </transition>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container footerGrid">
        <div class="">
          <a class="brand" href="#home" @click.prevent="go('home', true)">
            <span class="brandIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="icon">
                <path
                    d="M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10H6a3 3 0 0 1-3-3V7Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                />
                <path
                    d="M15 10h3.2a2 2 0 0 1 1.7 1l1.1 2a2 2 0 0 1 .3 1v3h-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                />
                <path
                    d="M7.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                />
                </svg>
            </span>
            <span class="brandText">
                <span class="brandName">Statewide Car Carriers</span>
                <span class="brandSub">Family-owned since 1990</span>
            </span>
            </a>

          <p class="footP">
            Your trusted partner for safe and reliable vehicle transport across Australia’s East Coast. Family-owned and
            operated with decades of experience.
          </p>

          <div class="footInfo">
            <div class="footLine">
              <span class="footIcon">☎</span> (02) 4377 7000
            </div>
            <div class="footLine">
              <span class="footIcon">✉</span> {{ email }}
            </div>
            <div class="footLine">
              <span class="footIcon">📍</span> 376 Wisemans Ferry Rd, Somersby NSW 2250, Australia
            </div>
          </div>
        </div>

        <div class="footCol">
          <div class="footTitle">Quick Links</div>
          <a href="#home" @click.prevent="go('home')">Home</a>
          <a href="#services" @click.prevent="go('services')">Services</a>
          <a href="#coverage" @click.prevent="go('coverage')">Coverage Area</a>
          <a href="#about" @click.prevent="go('about')">About Us</a>
          <a href="#contact" @click.prevent="go('contact')">Contact</a>
        </div>

        <div class="footCol">
          <div class="footTitle">Our Services</div>
          <span>Personal Vehicle Transport</span>
          <span>Dealership Services</span>
          <span>Interstate Relocations</span>
          <span>Corporate Fleet</span>
          <span>Emergency Transport</span>
        </div>
      </div>

      <div class="container footBottom">
        <div>© {{ new Date().getFullYear() }} Statewide Car Carriers. All rights reserved.</div>
        <div class="footLinks">
          <a href="#" @click.prevent>Privacy Policy</a>
          <a href="#" @click.prevent>Terms of Service</a>
          <a href="#" @click.prevent>Insurance Info</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watch, nextTick } from "vue";

const email = "bookings@statewidecarcarriers.com.au";
const phoneDial = "+61 2 4372 1895";

const loading = ref(true);
const showBanner = ref(true);
const mobileOpen = ref(false);
const isScrolled = ref(false);

const headerRef = ref<HTMLElement | null>(null);
const bannerRef = ref<HTMLElement | null>(null);

const toast = ref("");

const bannerHeight = ref(0);

watch(showBanner, async () => {
  await nextTick();
  updateBannerHeight();
});


function updateBannerHeight() {
  bannerHeight.value = showBanner.value ? (bannerRef.value?.offsetHeight ?? 0) : 0;
}

onMounted(() => {
  setTimeout(() => (loading.value = false), 650);

  updateBannerHeight();
  window.addEventListener("resize", updateBannerHeight);

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", updateBannerHeight);
  lockBodyScroll(false);
});

// Update closeBanner to also recalc
function closeBanner() {
  showBanner.value = false;
  updateBannerHeight();
}

const form = reactive({
  name: "",
  email: "",
  phone: "",
  pickup: "",
  dropoff: "",
  vehicle: "",
  notes: "",
});

function lockBodyScroll(lock: boolean) {
  const body = document.body;
  if (lock) {
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
  } else {
    body.style.overflow = "";
    body.style.touchAction = "";
  }
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
  lockBodyScroll(mobileOpen.value);
}
function closeMobile() {
  mobileOpen.value = false;
  lockBodyScroll(false);
}

function currentOffset() {
  const headerH = headerRef.value?.offsetHeight ?? 0;
  const bannerH = showBanner.value ? bannerRef.value?.offsetHeight ?? 0 : 0;
  // small breathing room to match mockup spacing
  return headerH + bannerH + 14;
}

function go(id: string, closeMobileMenu = false) {
  if (closeMobileMenu) closeMobile();
  const el = document.getElementById(id);
  if (!el) return;

  // Use absolute position via page offset (more reliable on mobile)
  const y = el.getBoundingClientRect().top + window.scrollY - currentOffset();
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

function onScroll() {
  isScrolled.value = window.scrollY > 8;
}

function submit() {
  // Demo-only form behavior
  toast.value = "Thanks! Demo form submitted (no data sent).";
  setTimeout(() => (toast.value = ""), 2600);

  // Reset (optional)
  form.name = "";
  form.email = "";
  form.phone = "";
  form.pickup = "";
  form.dropoff = "";
  form.vehicle = "";
  form.notes = "";
}

onMounted(() => {
  // loader (every refresh shows automatically)
  setTimeout(() => (loading.value = false), 650);

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  lockBodyScroll(false);
});
</script>

<style scoped>
/* Modern UI font */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

/* ---------- Base ---------- */
.page {
  --bg: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --muted2: #64748b;
  --border: rgba(15, 23, 42, 0.10);
  --soft: #f6f8fc;
  --soft2: #eef3fb;
  --primary: #771027;
  --primary2: #59000a;
  --shadow: 0 14px 40px rgba(2, 8, 23, 0.10);
  --shadow2: 0 10px 28px rgba(2, 8, 23, 0.10);

  color: var(--text);
  background: var(--bg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";
}

.container {
  width: min(1140px, calc(100% - 48px));
  margin: 0 auto;
}

/* ---------- Loader ---------- */
.loader {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: radial-gradient(1200px 400px at 30% 15%, rgba(37, 99, 235, 0.14), transparent 55%),
    linear-gradient(#ffffff, #ffffff);
  display: grid;
  place-items: center;
}
.loaderInner {
  display: grid;
  gap: 14px;
  place-items: center;
}
.spinner {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 4px solid rgba(37, 99, 235, 0.18);
  border-top-color:var(--primary);
  animation: spin 0.85s linear infinite;
}
.loaderText {
  color: var(--muted);
  font-weight: 650;
  letter-spacing: -0.01em;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------- Banner ---------- */
.banner {
  position: sticky;
  top: 0;
  z-index: 60;
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.10), rgba(37, 99, 235, 0.04));
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.bannerInner {
  width: min(1140px, calc(100% - 48px));
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}
.bannerLeft {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.pill {
  font-size: 12px;
  font-weight: 700;
  background: rgba(37, 99, 235, 0.12);
  color: var(--primary2);
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid rgba(37, 99, 235, 0.18);
}
.bannerText {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.iconBtn {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.75);
  border-radius: 999px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.iconBtn:hover {
  border-color: rgba(37, 99, 235, 0.22);
}

/* ---------- Header / Nav ---------- */
.header {
  position: sticky;
  top: var(--banner-h, 0px);
  z-index: 55;
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(12px);
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}
.header.scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 10px 24px rgba(2, 8, 23, 0.06);
}
.nav {
  width: min(1140px, calc(100% - 48px));
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
}
.brandIcon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--primary);
  color: #fff;
  flex: 0 0 auto;
}
.brandText {
  display: grid;
  line-height: 1.1;
  min-width: 0;
}
.brandName {
  font-weight: 800;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brandSub {
  font-size: 12px;
  color: var(--muted2);
  margin-top: 2px;
}

.links {
  display: flex;
  align-items: center;
  gap: 18px;
}
.links a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 600;
  font-size: 14px;
}
.links a:hover {
  color: var(--text);
}
.btnPrimary,
.btnOutline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 750;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.btnPrimary {
  background: linear-gradient(180deg, var(--primary), var(--primary2));
  color: #fff !important;
  border: 1px solid rgba(37, 99, 235, 0.25);
  box-shadow: 0 12px 26px rgba(37, 99, 235, 0.22);
}
.btnPrimary:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 34px rgba(37, 99, 235, 0.28);
}
.btnOutline {
  border: 1px solid rgba(37, 99, 235, 0.35);
  color: var(--primary2) !important;
  background: rgba(37, 99, 235, 0.06);
}
.btnOutline:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.55);
}

.hamburger {
  display: none;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.75);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text);
  margin: 4px auto;
  border-radius: 999px;
}

/* Mobile menu */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 8, 23, 0.28);
  z-index: 40;
}

/* ---------- Hero (Full height) ---------- */
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: grid;
  align-items: center;
  padding: 36px 0 40px;
  overflow: hidden;
}
.heroBg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1100px 520px at 16% 18%, rgba(37, 99, 235, 0.16), transparent 55%),
    radial-gradient(900px 520px at 82% 24%, rgba(37, 99, 235, 0.12), transparent 55%),
    linear-gradient(#f8fbff, #f3f7ff);
  z-index: -2;
}
.heroBottomFade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 120px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  z-index: -1;
}
.heroGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 34px;
  align-items: center;
}
.heroCopy h1 {
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 14px;
}
.lead {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  max-width: 54ch;
}
.ctaRow {
  display: flex;
  gap: 14px;
  margin-top: 22px;
  flex-wrap: wrap;
}
.big {
  padding: 12px 18px;
  border-radius: 14px;
}
.miniFeatures {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.mini {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 22px rgba(2, 8, 23, 0.05);
}
.miniIcon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.10);
  color: var(--primary2);
  flex: 0 0 auto;
}
.miniTitle {
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 13px;
}
.miniSub {
  color: var(--muted2);
  font-size: 12px;
  margin-top: 2px;
}

.heroMedia {
  display: grid;
  justify-items: end;
}
.mediaCard {
  position: relative;
  width: min(540px, 100%);
  border-radius: 18px;
  box-shadow: var(--shadow);
}
.mediaImg {
  height: 340px;
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(2, 8, 23, 0.10), rgba(2, 8, 23, 0.10)),
    url("/images/statewide-car-carriers/pic1.jpg");
  background-size: cover;
  background-position: center;
}
.badge {
  position: absolute;
  left: 18px;
  bottom: -18px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.10);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 14px 32px rgba(2, 8, 23, 0.12);
}
.badgeBig {
  font-weight: 900;
  font-size: 28px;
  color: var(--primary2);
  line-height: 1;
}
.badgeSmall {
  color: var(--muted);
  font-weight: 700;
  font-size: 12px;
  margin-top: 3px;
}

.icon {
  width: 22px;
  height: 22px;
}
.icon.sm {
  width: 18px;
  height: 18px;
}

/* ---------- Sections ---------- */
.section {
  padding: 72px 0;
}
.section.soft {
  background: linear-gradient(180deg, var(--soft), #ffffff);
}
.sectionHead {
  text-align: center;
  margin-bottom: 34px;
}
.sectionHead h2 {
  font-size: 34px;
  letter-spacing: -0.03em;
  margin: 0;
}
.sectionHead p {
  margin: 10px auto 0;
  color: var(--muted);
  max-width: 72ch;
  line-height: 1.7;
}

.grid2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.card {
  background: rgba(248, 251, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 16px;
  box-shadow: var(--shadow2);
  padding: 22px;
}
.service h3 {
  margin: 10px 0 8px;
  letter-spacing: -0.02em;
}
.service p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.7;
}
.cardIcon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.10);
  color: var(--primary2);
  border: 1px solid rgba(37, 99, 235, 0.16);
}
.bullets {
  margin: 0;
  padding-left: 18px;
  color: var(--text);
  display: grid;
  gap: 8px;
}
.bullets li {
  color: var(--muted);
}
.bullets li::marker {
  color: var(--primary2);
}

/* ---------- Coverage (Dark) ---------- */
.coverage {
  padding: 78px 0;
  background:
    radial-gradient(1200px 520px at 20% 10%, rgba(37, 99, 235, 0.24), transparent 60%),
    radial-gradient(900px 520px at 80% 20%, rgba(37, 99, 235, 0.16), transparent 60%),
    linear-gradient(180deg, #771027, #59000a);
  color: #e6edf7;
}
.coverageGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  align-items: center;
}
.eyebrow {
  display: flex;
  gap: 12px;
  align-items: center;
}
.eyebrowIcon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.18);
  color: #cfe1ff;
  border: 1px solid rgba(37, 99, 235, 0.25);
}
.coverage h2 {
  margin: 0;
  font-size: 36px;
  letter-spacing: -0.03em;
}
.coverageLead {
  margin: 14px 0 16px;
  color: rgba(230, 237, 247, 0.82);
  line-height: 1.75;
}
.routesCard {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 16px;
  padding: 16px;
  margin-top: 10px;
}
.routesTitle {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.routesGrid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 16px;
}
.route {
  color: rgba(230, 237, 247, 0.86);
  font-weight: 650;
  font-size: 13px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 2px solid rgba(207, 225, 255, 0.55);
  position: relative;
}
.dot::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.9);
}
.coverageBadges {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
}
.chip {
  background: rgba(37, 99, 235, 0.16);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 14px;
  padding: 12px 14px;
  min-width: 190px;
}
.chipTop {
  font-size: 12px;
  color: rgba(230, 237, 247, 0.75);
}
.chipBig {
  margin-top: 4px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.coverageMedia {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
  min-height: 320px;
}
.coverImg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(2, 8, 23, 0.30), rgba(2, 8, 23, 0.55)),
    url("/images/statewide-car-carriers/pic2.jpg");
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}
.coverStat {
  position: absolute;
  left: 18px;
  bottom: 18px;
}
.coverBig {
  font-weight: 950;
  font-size: 26px;
  letter-spacing: -0.03em;
}
.coverSmall {
  color: rgba(230, 237, 247, 0.80);
  font-weight: 650;
  font-size: 12px;
  margin-top: 4px;
}

/* ---------- About ---------- */
.values {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}
.value {
  text-align: center;
  padding: 18px 14px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 12px 26px rgba(2, 8, 23, 0.06);
}
.valueIcon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.10);
  color: var(--primary2);
  border: 1px solid rgba(37, 99, 235, 0.16);
  margin: 0 auto 10px;
}
.valueTitle {
  font-weight: 900;
  letter-spacing: -0.02em;
}
.valueText {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
  margin-top: 6px;
}

.why {
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: stretch;
}
.whyMedia {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  box-shadow: var(--shadow2);
  background:
    linear-gradient(180deg, rgba(2, 8, 23, 0.10), rgba(2, 8, 23, 0.12)),
    url("/images/statewide-car-carriers/pic3.jpg");
  background-size: cover;
  background-position: center;
  min-height: 360px;
}
.whyCard {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow2);
  padding: 22px;
}
.whyCard h3 {
  margin: 0 0 14px;
  font-size: 26px;
  letter-spacing: -0.03em;
}
.whyList {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 14px;
}
.whyList li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  flex: 0 0 auto;
}
.whyTitle {
  font-weight: 900;
  letter-spacing: -0.02em;
}
.whyText {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
  margin-top: 3px;
}

/* ---------- Contact ---------- */
.contactGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.contactLeft h3 {
  margin: 0 0 14px;
  font-size: 20px;
  letter-spacing: -0.02em;
}
.infoRow {
  display: flex;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 12px 26px rgba(2, 8, 23, 0.05);
  margin-bottom: 12px;
}
.infoIcon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(37, 99, 235, 0.10);
  color: var(--primary2);
  border: 1px solid rgba(37, 99, 235, 0.16);
  flex: 0 0 auto;
}
.infoTitle {
  font-weight: 900;
  letter-spacing: -0.02em;
}
.infoLink {
  display: inline-block;
  margin-top: 4px;
  color: var(--primary2);
  font-weight: 800;
  text-decoration: none;
}
.infoLink:hover {
  text-decoration: underline;
}
.infoText {
  margin-top: 4px;
  color: var(--text);
  font-weight: 650;
}
.infoSub {
  margin-top: 4px;
  color: var(--muted2);
  font-size: 12px;
}

.quoteBox {
  margin-top: 14px;
  border-radius: 18px;
  padding: 20px;
  color: #fff;
  background: linear-gradient(180deg, var(--primary), var(--primary2));
  box-shadow: 0 18px 38px rgba(37, 99, 235, 0.25);
}
.quoteTitle {
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 22px;
}
.quoteText {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.6;
}
.quoteBullets {
  margin: 12px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}
.quoteBullets li::marker {
  color: rgba(255, 255, 255, 0.95);
}

.formCard {
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow2);
  padding: 22px;
}
.formTitle {
  font-weight: 950;
  letter-spacing: -0.03em;
  font-size: 18px;
  margin-bottom: 14px;
}
.field {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
label {
  font-weight: 800;
  color: var(--muted);
  font-size: 13px;
}
.req {
  color: var(--primary2);
}
input,
textarea {
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.14);
  padding: 12px 12px;
  font-size: 14px;
  outline: none;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
input:focus,
textarea:focus {
  border-color: rgba(37, 99, 235, 0.55);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
}
.row2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.full {
  width: 100%;
  padding: 12px 18px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
}
.toast {
  margin-top: 12px;
  padding: 12px 12px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.20);
  color: var(--primary2);
  font-weight: 800;
}

/* ---------- Footer ---------- */
.footer {
  background: linear-gradient(180deg, #0a1222, #070c16);
  color: rgba(230, 237, 247, 0.88);
  padding: 54px 0 22px;
}
.footerGrid {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 0.9fr;
  gap: 28px;
}
.footBrand .brandSub {
  color: rgba(230, 237, 247, 0.60);
}
.footP {
  margin: 12px 0 14px;
  color: rgba(230, 237, 247, 0.72);
  line-height: 1.7;
}
.footInfo {
  display: grid;
  gap: 8px;
}
.footLine {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 650;
}
.footIcon {
  width: 18px;
  display: inline-block;
  opacity: 0.9;
}
.footCol a,
.footCol span {
  display: block;
  margin-top: 10px;
  color: rgba(230, 237, 247, 0.74);
  text-decoration: none;
  font-weight: 650;
}
.footCol a:hover {
  color: rgba(230, 237, 247, 0.95);
}
.footTitle {
  font-weight: 950;
  letter-spacing: -0.02em;
  color: rgba(230, 237, 247, 0.92);
  margin-bottom: 6px;
}
.footBottom {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  display: flex;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  color: rgba(230, 237, 247, 0.62);
  font-weight: 650;
}
.footLinks {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.footLinks a {
  color: rgba(230, 237, 247, 0.62);
  text-decoration: none;
}
.footLinks a:hover {
  color: rgba(230, 237, 247, 0.92);
}

/* ---------- Transitions ---------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slideDown-enter-active,
.slideDown-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slideDown-enter-from,
.slideDown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ---------- Responsive ---------- */
@media (max-width: 980px) {
  .heroGrid,
  .coverageGrid,
  .why,
  .contactGrid {
    grid-template-columns: 1fr;
  }
  .heroMedia {
    justify-items: start;
  }
  .mediaImg {
    height: 300px;
  }
  .values {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .footerGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
  .row2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .hamburger {
    display: inline-grid;
    place-items: center;
  }

  .links {
    position: fixed;
    right: 16px;
    top: calc(72px + 16px);
    z-index: 50;
    width: min(340px, calc(100% - 32px));
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(15, 23, 42, 0.12);
    border-radius: 18px;
    box-shadow: 0 24px 70px rgba(2, 8, 23, 0.22);
    padding: 12px;
    display: grid;
    gap: 6px;
    transform-origin: top right;
    transform: scale(0.98);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .links.open {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
  .links a {
    padding: 12px 12px;
    border-radius: 14px;
  }
  .links a:hover {
    background: rgba(37, 99, 235, 0.06);
  }
  .links .btnPrimary,
  .links .btnOutline {
    width: 100%;
    margin-top: 4px;
    padding: 12px 14px;
    border-radius: 14px;
  }

  .miniFeatures {
    grid-template-columns: 1fr;
  }
  .bannerText {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
}

@media (max-width: 520px) {
  .container,
  .nav,
  .bannerInner {
    width: min(1140px, calc(100% - 28px));
  }
  .hero {
    padding: 26px 0 34px;
  }
  .mediaImg {
    height: 260px;
  }
  .section {
    padding: 58px 0;
  }
  .sectionHead h2 {
    font-size: 30px;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto !important;
  }
  .btnPrimary,
  .btnOutline,
  .header,
  .links {
    transition: none !important;
  }
}
</style>