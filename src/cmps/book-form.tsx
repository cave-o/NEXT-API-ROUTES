import React, { FormEvent } from 'react';

interface BookFormProps {}

const BookForm: React.FC<BookFormProps> = () => {
  function onBookTrip(ev: FormEvent) {
    ev.preventDefault();
  }

  return (
    <section className="book-form">
      <form onSubmit={onBookTrip}>
        <div className="flex">
          <div className="input-box">
            <span>name :</span>
            <input type="text" placeholder="enter your name" name="name" />
          </div>
          <div className="input-box">
            <span>email :</span>
            <input type="email" placeholder="enter your email" name="email" />
          </div>
          <div className="input-box">
            <span>phone :</span>
            <input type="number" placeholder="enter your number" name="phone" />
          </div>
          <div className="input-box">
            <span>address :</span>
            <input type="text" placeholder="enter your address" name="address" />
          </div>
          <div className="input-box">
            <span>where to :</span>
            <input type="text" placeholder="enter destination" name="destination" />
          </div>
          <div className="input-box">
            <span>how many :</span>
            <input type="number" placeholder="number of guests" name="guests" />
          </div>
          <div className="input-box">
            <span>arrival :</span>
            <input type="date" name="arrival" />
          </div>
          <div className="input-box">
            <span>departure :</span>
            <input type="date" name="departure" />
          </div>
        </div>

        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default BookForm;
