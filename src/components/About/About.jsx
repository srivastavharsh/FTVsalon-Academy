export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          {/* React development is carried out by passionate developers */}
                          F salon Academy 
                      </h2>
                      <p className="mt-6 text-gray-600">
                                           In an era where technology seamlessly blends with lifestyle enhancements, Naturals 
                                           Salon is poised to redefine the beauty service landscape with the launch of its 
                                           pioneering mobile and web application. Envisioned to empower and elevate the salon 
                                           experience, this comprehensive digital platform is designed to integrate cutting-edge 
                                           technology with Naturals Salon's esteemed beauty expertise, creating an unmatched 
                                           synergy between client convenience and service excellence.

                      </p>
                      <p className="mt-4 text-gray-600">
                      As India's leading salon brand, Naturals Salon understands the evolving needs of its 
                      diverse clientele. With over [number] salons nationwide, our mission extends beyond 
                     mere beauty services, striving to create a holistic ecosystem that nurtures beauty, 
                     wellness, and sustainability. The Naturals app is not just a tool but a revolution, setting 
                     new benchmarks in personalized beauty care and customer engagement through 
                      technological innovation.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}