import { useUserShow } from "../hooks/useUserShow";
import { useBookingData } from "../hooks/useBookinData";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";

export default function UserShow() {
  const { id } = useParams();
  const { data: userData } = useUserShow(id!);
  const { data: bookingData } = useBookingData(id!);

  if (!userData || (!bookingData)) return <div>Loading...</div>

  return (
    <section id="userInfo" className="py-12 bg-muted/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-baseline gap-5 mb-16">
          <div className="w-12 h-px bg-foreground/20 self-center" />
          <h2 className="text-3xl font-black tracking-tight">Welcome {userData.lastName}, {userData.firstName} </h2>
        </div>
        <div className="items-center justify-center gap-3">
          <p>email: {userData.email}</p>
          <p>phone: {userData.phoneNumber}</p>
        </div>
        <div className="py-12">
            <Button size="sm">Book a Car</Button>
          </div>
        <div className="flex items-baseline gap-5 mb-16">
          <div className="w-12 h-px bg-foreground/20 self-center" />
            <h3 className="text-3xl font-black tracking-tight">My Bookings</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookingData?.map((booking) => (
            <div key={booking.id}>
              <p>{booking.car.carName}</p>
              <img src={booking.car.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
