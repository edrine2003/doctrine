import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Home } from "lucide-react";

export default function LittleHeartsSanctuary() {
  return (
    <div className="p-4 space-y-10">
      {/* Hero Section */}
      <section className="text-center bg-pink-100 rounded-2xl p-10 shadow-md">
        <img
          src="/litt.jpg"
          alt="Little Hearts Sanctuary Logo"
          className="mx-auto w-40 h-auto"
        />
        <h1 className="text-4xl font-bold text-pink-700 mt-4">Little Hearts Sanctuary</h1>
        <p className="text-lg mt-2 text-gray-700">A haven for the forgotten, a light for the hopeless.</p>
      </section>

      {/* Your Impact Section */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-pink-800">Your Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/amen.jpg" alt="Your impact - amen" className="rounded-lg w-full h-auto" />
          <img src="/baby.jpg" alt="Your impact - baby" className="rounded-lg w-full h-auto" />
          <img src="/eat.jpg" alt="Your impact - eat" className="rounded-lg w-full h-auto" />
          <img src="/family.jpg" alt="Your impact - family" className="rounded-lg w-full h-auto" />
          <img src="/love.jpg" alt="Your impact - love" className="rounded-lg w-full h-auto" />
          <img src="/pray.jpg" alt="Your impact - pray" className="rounded-lg w-full h-auto" />
          <img src="/share.jpg" alt="Your impact - share" className="rounded-lg w-full h-auto" />
        </div>
        <p className="text-sm text-gray-600">These are not our children; this is how we sometimes spend the money.</p>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-pink-700">Get in Touch</h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button className="bg-pink-600 text-white hover:bg-pink-700">Send Message</Button>
        </form>
        <div className="pt-4 space-y-2 text-gray-600">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> littlehearts@email.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +123 456 7890
          </p>
          <p className="flex items-center gap-2">
            <Home className="w-4 h-4" /> 123 Kindness Rd, Hope City
          </p>
        </div>
      </section>
    </div>
  );
}
