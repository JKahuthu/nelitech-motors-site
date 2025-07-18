
import React from "react";
import { Phone, Mail, MapPin, Car } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const vehicles = [
  {
    id: 1,
    name: "Toyota Axio 2015",
    price: "Ksh 1,150,000",
    specs: "Automatic | Petrol | 86,000 km | 1500cc",
    image: "https://via.placeholder.com/400x250",
    details: "This Toyota Axio 2015 offers a comfortable ride, reliable fuel economy, and a spacious interior—ideal for daily commuting or Uber business.",
  },
  {
    id: 2,
    name: "Mazda Demio 2016",
    price: "Ksh 730,000",
    specs: "Automatic | Petrol | 72,000 km | 1300cc",
    image: "https://via.placeholder.com/400x250",
    details: "Fuel-efficient and compact, the Mazda Demio 2016 is perfect for city driving. Comes with alloy rims and new tires.",
  },
  {
    id: 3,
    name: "Nissan Note 2014",
    price: "Ksh 670,000",
    specs: "Automatic | Petrol | 95,000 km | 1200cc",
    image: "https://via.placeholder.com/400x250",
    details: "Spacious and reliable hatchback with plenty of boot space. Great for family or ride-hailing use.",
  },
];

export default function NelitechMotors() {
  return (
    <main className="p-4 md:p-10 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Nelitech Motors</h1>
        <p className="text-lg text-gray-600">Quality Vehicles | Trusted Deals | Kiambu Road</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {vehicles.map((car) => (
          <Card key={car.id} className="rounded-2xl shadow-md">
            <img src={car.image} alt={car.name} className="rounded-t-2xl w-full h-48 object-cover" />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-green-600 font-bold">{car.price}</p>
              <p className="text-sm text-gray-500">{car.specs}</p>
              <p className="text-sm text-gray-600 italic">{car.details}</p>
              <div className="flex gap-2">
                <Button className="w-full">Enquire</Button>
                <Button variant="outline" className="w-full">Book</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-100 p-6 rounded-xl max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book a Test Drive / Send Enquiry</h2>
        <form 
          className="space-y-4"
          action="https://formspree.io/f/your-form-id" 
          method="POST"
        >
          <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <input type="text" name="car" placeholder="Car Interested In (e.g. Toyota Axio)" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" rows={4}></textarea>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Nelitech Motors</h2>
        <p className="flex justify-center items-center gap-2 text-sm"><Phone size={16}/> Dorothy / John</p>
        <p className="flex justify-center items-center gap-2 text-sm"><Mail size={16}/> kahuthujmk@gmail.com</p>
        <p className="flex justify-center items-center gap-2 text-sm"><MapPin size={16}/> Kiambu Road</p>
        <a
          href="https://wa.me/254722616318"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4">
            <Car className="mr-2" size={16}/> Chat via WhatsApp
          </Button>
        </a>
      </section>
    </main>
  );
}
