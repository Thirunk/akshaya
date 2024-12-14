import CartCard from "@/app/_components/CartCard";

export const metadata = {
  title: "Cart",
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your Orders
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no orders yet. Check out our
          <a className="underline text-accent-500 ml-2" href="/products">
            products &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <CartCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
