export default function Home() {
  // body
  return (
    <div className="bg-blue-800 min-h-screen flex flex-col items-center justify-center">
      {/* Sección Crea tu Usuario */}
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md my-8">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Create your User
        </h1>
        <p className="text-lg text-gray-700 mb-4 text-center">
          To become part of our platform, you first need to create your user
          account. It's very easy! Just fill in the necessary details, and you
          will get access to your personal profile and the possibility to
          interact with unique cities and buildings.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Create User
          </button>
        </div>
      </section>

      {/* Sección Explicación sobre NFTs */}
      <section className="w-full max-w-4xl p-8 bg-black bg-opacity-80 rounded-lg shadow-md my-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          NFTs for Users, Cities and Buildings
        </h2>
        <p className="text-gray-200 text-lg mb-4">
          On our platform, each user, city, and building is represented by an{" "}
          <span className="text-blue-600">NFT (Non-Fungible Token)</span>. This
          means that each of these assets will be unique, identifiable, and can
          be used in different contexts within the platform.
        </p>
        <p className="text-gray-200 text-lg mb-4">
          Users can have an NFT profile that includes their personal
          information, interaction history, and more. Buildings will be
          represented as NFTs to facilitate access to specific properties, and
          cities will also be unique tokens that can have their own benefits
          within the platform.
        </p>
        <p className="text-gray-200 text-lg mb-4">
          By having a city or building NFT, you will be able to access exclusive
          experiences, promotions, or even trade them with other users. NFTs on
          our platform not only serve as identification, but also as a way to
          make secure and transparent transactions.
        </p>
      </section>

      {/* Sección ¿Cómo Funciona? */}
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md my-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          ¿How does it work?
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Every time a user registers, an NFT linked to their profile is
          automatically created. This NFT can be upgraded or customized based on
          the user’s actions within the platform. Users will also be able to
          buy, sell, or trade their NFTs with other users, opening the door to a
          dynamic marketplace within the ecosystem.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Cities and buildings work in a similar way. Each city is a unique NFT
          that represents exclusive properties and interests. Buildings, in
          turn, are tokens tied to physical or virtual locations that users can
          explore, interact with, and in some cases, acquire as part of their
          portfolio.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Learn more about how to get your NFT
          </button>
        </div>
      </section>

      {/* Sección Beneficios de los NFTs */}
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md my-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Benefits of NFTs
        </h2>
        <ul className="list-inside list-disc text-gray-700 text-lg">
          <li className="mb-4">
            Access to exclusive content and properties within our platform.
          </li>
          <li className="mb-4">
            Possibility of exchanging or selling your NFTs on the secondary
            market.
          </li>
          <li className="mb-4">
            Secure and transparent transactions thanks to blockchain technology.
          </li>
          <li className="mb-4">
            Customize your NFT assets based on your interests and activities
            within the platform.
          </li>
        </ul>
      </section>

      {/* Sección CTA Final */}
      <section className="w-full max-w-4xl p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-md my-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Today!</h2>
        <p className="text-lg mb-4">
          Don't be left behind, create your account now and start interacting
          with the world of NFTs. Every city, building and user on our platform
          has the potential to become something unique and valuable.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Create your account
        </button>
      </section>
    </div>
  );
}
