function ContactUs() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        <h1>დაგვიკავშირდით</h1>
        <p>თუ გაქვთ რაიმე კითხვა ან გსურთ ჩვენთან თანამშრომლობა, შეავსეთ ფორმა ან მოგვწერეთ:</p>
        
        <form className="contact-form">
          <input type="text" placeholder="თქვენი სახელი" className="form-input" name="სახელი"/>
          <input type="email" placeholder="ელ-ფოსტა" className="form-input" name="მაილი"/>
          <textarea placeholder="თქვენი შეტყობინება" className="form-textarea" name="კომენტარი"></textarea>
          <button className="form-btn">გაგზავნა</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs()