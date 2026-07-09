export const metadata = {
  title: "Daxson Events in Kuala Lumpur | Register Interest",
  description: "Sign up to register your interest in future Daxson events in Kuala Lumpur.",
  alternates: {
    canonical: "/malaysia",
  },
};

export default function MalaysiaInterestPage() {
  return (
    <main className="signup-page">
      <section className="signup-hero">
        <div className="signup-bg" />
        <div className="signup-overlay" />

        <a className="signup-logo" href="/" aria-label="Back to Daxson homepage">
          <img src="/assets/daxson-logo.png" alt="Daxson" />
        </a>

        <div className="signup-card">
          <p className="section-kicker signup-kicker">Register Interest</p>
          <h1>Sign Up for Daxson Events in Kuala Lumpur</h1>
          <p className="signup-intro">
            Register your interest and help us understand demand for a future Daxson event in Kuala Lumpur.
          </p>

          <form className="insider-form" action="/api/malaysia-interest" method="POST">
            <div className="form-row">
              <label>
                <span>First Name</span>
                <input name="firstName" type="text" autoComplete="given-name" placeholder="First Name" required />
              </label>

              <label>
                <span>Last Name</span>
                <input name="lastName" type="text" autoComplete="family-name" placeholder="Last Name" required />
              </label>
            </div>

            <label>
              <span>Email Address</span>
              <input name="email" type="email" autoComplete="email" placeholder="Email Address" required />
            </label>

            <div className="form-row">
              <label>
                <span>City</span>
                <select name="city" autoComplete="address-level2" required defaultValue="">
                  <option value="" disabled>City</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="George Town">George Town</option>
                  <option value="Johor Bahru">Johor Bahru</option>
                  <option value="Ipoh">Ipoh</option>
                  <option value="Shah Alam">Shah Alam</option>
                  <option value="Petaling Jaya">Petaling Jaya</option>
                  <option value="Kota Kinabalu">Kota Kinabalu</option>
                  <option value="Kuching">Kuching</option>
                  <option value="Malacca City">Malacca City</option>
                  <option value="Seremban">Seremban</option>
                  <option value="Alor Setar">Alor Setar</option>
                  <option value="Kuantan">Kuantan</option>
                  <option value="Kuala Terengganu">Kuala Terengganu</option>
                  <option value="Kota Bharu">Kota Bharu</option>
                  <option value="Miri">Miri</option>
                  <option value="Sibu">Sibu</option>
                  <option value="Bintulu">Bintulu</option>
                  <option value="Putrajaya">Putrajaya</option>
                  <option value="Cyberjaya">Cyberjaya</option>
                  <option value="Subang Jaya">Subang Jaya</option>
                  <option value="Klang">Klang</option>
                  <option value="Kajang">Kajang</option>
                  <option value="Ampang">Ampang</option>
                  <option value="Selayang">Selayang</option>
                  <option value="Batu Pahat">Batu Pahat</option>
                  <option value="Muar">Muar</option>
                  <option value="Kluang">Kluang</option>
                  <option value="Kulim">Kulim</option>
                  <option value="Sungai Petani">Sungai Petani</option>
                  <option value="Taiping">Taiping</option>
                  <option value="Teluk Intan">Teluk Intan</option>
                  <option value="Lumut">Lumut</option>
                  <option value="Butterworth">Butterworth</option>
                  <option value="Bukit Mertajam">Bukit Mertajam</option>
                  <option value="Bayan Lepas">Bayan Lepas</option>
                  <option value="Sepang">Sepang</option>
                  <option value="Nilai">Nilai</option>
                  <option value="Port Dickson">Port Dickson</option>
                  <option value="Sandakan">Sandakan</option>
                  <option value="Tawau">Tawau</option>
                  <option value="Lahad Datu">Lahad Datu</option>
                  <option value="Labuan">Labuan</option>
                  <option value="Langkawi">Langkawi</option>
                </select>
              </label>

              <label>
                <span>Country</span>
                <select name="country" autoComplete="country-name" required defaultValue="Malaysia">
                  <option value="Malaysia">Malaysia</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Germany">Germany</option>
                  <option value="Poland">Poland</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="France">France</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Romania">Romania</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Israel">Israel</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Timor-Leste">Timor-Leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </label>
            </div>

            <label>
              <span>Ticket Interest</span>
              <select name="ticketInterest" required defaultValue="">
                <option value="" disabled>How many tickets would you be interested in?</option>
                <option value="1">1 ticket</option>
                <option value="2">2 tickets</option>
                <option value="3">3 tickets</option>
                <option value="4">4 tickets</option>
                <option value="5">5 tickets</option>
                <option value="6">6 tickets</option>
                <option value="7">7 tickets</option>
                <option value="8">8 tickets</option>
                <option value="8+">8+ tickets</option>
              </select>
            </label>

            <button type="submit">Register Interest</button>
          </form>

          <p className="signup-small">
            By signing up, you agree to be contacted by Daxson about news and events, and you agree for your details to be shared with any potential promoter for event purposes. You can unsubscribe from marketing emails at any time.
          </p>
        </div>
      </section>
    </main>
  );
}
