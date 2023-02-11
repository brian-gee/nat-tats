import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';

export default function Hero({}) {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="max-w-sm rounded-lg shadow-2xl"
            src="/neon-shop-sign.jpg"
            alt="Neon Shop Sign"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-2xl font-bold">Tattoo</h1>
            <p className="py-6 max-w-prose">
              We embrace self-expression and celebrate creativity. You are
            </p>
            <button className="btn btn-primary uppercase text-xs">
              <AiOutlineCalendar className="mr-2" />
              Request Appointment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
