
const ContactUsPage = () => {
    return (
        <div>
             <section className="banner mb-10 h-[800px]">
        <img 
          src="http://www.hemiiot.com/uploads/allimg/20240527/1-24052F92J5a5.jpg" 
          alt="About Us Banner" 
          className="w-full h-full object-cover"
        />
      </section>
      <section className="py-16 bg-gray-100">
  <div className="text-center mb-12">
    <h2 className="text-[#3A62AD] font-bold text-4xl md:text-5xl mb-4">CONTACT US</h2>
    <p className="text-sm md:text-lg max-w-3xl mx-auto">
      Presenting your featured content in a visually appealing and successful site. For this reason, we chose this layout.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0 w-2/3 mx-auto">
  {/* Address */}
  <div className="text-center p-6 rounded-lg">
    <img src="http://www.hemiiot.com/template/pc/skin/static/images/w2.png" className="w-20 h-20 mx-auto mb-4" alt="Address" />
    <h4 className="text-xl font-semibold text-[#3A62AD] mb-2">Address</h4>
    <p className="text-gray-600 text-sm">123 Main Street, City, State, ZIP Code</p>
  </div>
  
  {/* Email */}
  <div className="text-center p-6 rounded-lg">
    <img src="http://www.hemiiot.com/template/pc/skin/static/images/w3.png" className="w-20 h-20 mx-auto mb-4" alt="Email" />
    <h4 className="text-xl font-semibold text-[#3A62AD] mb-2">Email</h4>
    <p className="text-gray-600 text-sm">zvL0Y@example.com</p>
  </div>
  
  {/* Phone */}
  <div className="text-center p-6 rounded-lg">
    <img src="http://www.hemiiot.com/template/pc/skin/static/images/w4.png" className="w-20 h-20 mx-auto mb-4" alt="Phone" />
    <h4 className="text-xl font-semibold text-[#3A62AD] mb-2">Phone</h4>
    <p className="text-gray-600 text-sm">+85266491585</p>
  </div>
  
  {/* Hours */}
  <div className="text-center p-6 rounded-lg">
    <img src="http://www.hemiiot.com/template/pc/skin/static/images/w5.png" className="w-20 h-20 mx-auto mb-4" alt="Hours" />
    <h4 className="text-xl font-semibold text-[#3A62AD] mb-2">Hours</h4>
    <p className="text-gray-600 text-sm">Monday-Friday: 9am to 6.30pm<br/>Saturday, Sunday: Closed</p>
  </div>
</div>

</section>
<section className="py-12 px-6 container">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Contact Form */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-[#3A62AD] mb-6 text-center">Contact Us</h2>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="phone" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your phone" required />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your message" rows="4" required></textarea>
        </div>
        <button type="submit" className="w-full bg-[#3A62AD] text-white p-3 rounded-lg hover:bg-[#2a4e8e] transition">Submmited</button>
      </form>
    </div>

    {/* Map Section */}
    <div className="bg-gray-100 rounded-lg shadow-lg">
      <div className="h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.5454116946157!2d-77.0365309!3d38.8976763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7ac17c933ff%3A0xe2f0f3cf9708e3a9!2sWhite%20House!5e0!3m2!1sen!2sus!4v1616225368292!5m2!1sen!2sus"
          className="w-full h-80 rounded-lg"
          title="Location Map"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
  </div>
</section>
            
        </div>
    );
  };
  
  export default ContactUsPage;