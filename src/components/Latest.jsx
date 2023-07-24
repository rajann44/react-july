import React from "react";

const Latest = () => {
  const postDetails = [
    {
      category: "TRAVELING",
      author: "Auth1",
      date: "28 DEC 2020",
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      title: "Simple is better",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    },
    {
      category: "SPRITUAL",
      author: "Auth2",
      date: "28 DEC 2021",
      image:
        "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
      title: "Simple is best",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    },
    {
      category: "OMG",
      author: "Auth3",
      date: "28 DEC 2022",
      image:
        "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
      title: "Simple is Ultimate",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {postDetails.map((post, index) => (
          <div
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            key={index}
          >
            <img src={post.image} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  {post.category}
                </a>
                <span className="text-gray-600"> — {post.date}</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {post.title}
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author : {post.author}
              </p>
              <p className="mb-2 text-gray-700">{post.description}</p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
