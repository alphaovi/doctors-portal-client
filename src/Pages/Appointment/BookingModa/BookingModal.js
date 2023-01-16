import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, "PP")
    const { user } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            phone,
            email
        }

        fetch("http://localhost:5000/bookings", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success("Booking confirmed")
                }
                else{
                    toast.error(data.message);
                }
            })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} className="mt-5 input input-bordered w-full max-w-xs" disabled />
                        <select name="slot" className="select select-bordered mt-5 w-full max-w-xs">
                            <option>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="mt-5 input input-bordered w-full max-w-xs" required />
                        <input name="phone" type="text" placeholder="Your Phone" className="mt-5 input input-bordered w-full max-w-xs" required />
                        <input name="email" type="email" defaultValue={user?.email} placeholder="Email Address" className="mt-5 input input-bordered w-full max-w-xs" required disabled />
                        <br />
                        <input className="mt-5 btn btn-accent input input-bordered w-full max-w-xs" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;