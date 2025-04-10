const sampleListings= [
    {
      title: "Cozy Modern Apartment",
      description: "A beautiful and modern apartment with all the amenities you need for a comfortable stay.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 1500,
      location: "New York, NY",
      country: "USA"
    },
    {
      title: "Seaside Villa Retreat",
      description: "Enjoy the sea breeze in this stunning villa by the beach, perfect for relaxation.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 12000,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Mountain Cabin Escape",
      description: "Escape to the mountains in this cozy cabin, ideal for nature lovers and adventure seekers.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/2156338256/photo/3d-rendering-of-modern-two-story-house-with-gray-and-wood-accents-in-evening.jpg?s=1024x1024&w=is&k=20&c=SZvDQ2l2ZQLh7y2n30pAAL7zbcPf1H8dkqlraXa6XBA=",
      },
      price: 2000,
      location: "Aspen, CO",
      country: "USA"
    },
    {
      title: "Luxury City Penthouse",
      description: "A high-end penthouse offering breathtaking views and top-notch facilities in the heart of the city.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 3000,
      location: "London",
      country: "UK"
    },
    {
      title: "Rustic Countryside Cottage",
      description: "A charming countryside cottage surrounded by greenery and tranquility.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      }, 
      price: 500,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Urban Studio Loft",
      description: "A chic studio loft located in the bustling city center, close to all major attractions.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 1800,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Beachfront Bungalow",
      description: "A cozy bungalow with direct beach access, perfect for a seaside getaway.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 2500,
      location: "Malibu, CA",
      country: "USA"
    },
    {
      title: "Historic Downtown Flat",
      description: "A renovated flat in a historic building, offering a blend of classic charm and modern amenities.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 2200,
      location: "Paris",
      country: "France"
    },
  
    {
      title: "Cozy Modern Apartment",
      description: "A beautiful and modern apartment with all the amenities you need for a comfortable stay.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1492313721/photo/modern-luxury-villa-with-private-pool-at-night.jpg?s=1024x1024&w=is&k=20&c=rw657Ce7MHOqfHVcoqBHTL2kbsFkP3Vwx9gS-Uja66U=",
      },
      price: 1500,
      location: "New York, NY",
      country: "USA"
    },
    {
      title: "Seaside Villa Retreat",
      description: "Enjoy the sea breeze in this stunning villa by the beach, perfect for relaxation.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 12000,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Mountain Cabin Escape",
      description: "Escape to the mountains in this cozy cabin, ideal for nature lovers and adventure seekers.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1155103273/photo/modern-luxury-house-with-private-swimming-pool-at-dusk.jpg?s=1024x1024&w=is&k=20&c=HKY-lH3JVe3Jn7XIFkk1xzOLKE6eODg2zU-ZEc7nXQw=",
      },
      price: 2000,
      location: "Aspen, CO",
      country: "USA"
    },
    {
      title: "Luxury City Penthouse",
      description: "A high-end penthouse offering breathtaking views and top-notch facilities in the heart of the city.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 3000,
      location: "London",
      country: "UK"
    },
    {
      title: "Rustic Countryside Cottage",
      description: "A charming countryside cottage surrounded by greenery and tranquility.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1496654360/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-evening-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=tVFbZci_6qTisof5tPHJ-3XZ0xVSGO4h87efezL_TMw=",
      },
      price: 500,
      location: "Tuscany",
      country: "Italy"
    },
    {
      title: "Urban Studio Loft",
      description: "A chic studio loft located in the bustling city center, close to all major attractions.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1496654360/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-evening-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=tVFbZci_6qTisof5tPHJ-3XZ0xVSGO4h87efezL_TMw=",
      },
      price: 1800,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Beachfront Bungalow",
      description: "A cozy bungalow with direct beach access, perfect for a seaside getaway.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 2500,
      location: "Malibu, CA",
      country: "USA"
    },
    {
      title: "Historic Downtown Flat",
      description: "A renovated flat in a historic building, offering a blend of classic charm and modern amenities.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1496654360/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-evening-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=tVFbZci_6qTisof5tPHJ-3XZ0xVSGO4h87efezL_TMw=",
      },
      price: 2200,
      location: "Paris",
      country: "France"
    },
    {
      title: "Ski Lodge Chalet",
      description: "A perfect winter retreat with easy access to ski slopes and breathtaking mountain views.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 5000,
      location: "Zermatt",
      country: "Switzerland"
    },
    {
      title: "Tropical Island Villa",
      description: "A luxurious private villa on an exclusive island with stunning ocean views.",
      image: {
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/1496654360/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-evening-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=tVFbZci_6qTisof5tPHJ-3XZ0xVSGO4h87efezL_TMw=",
      },
      price: 15000,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Lakefront Cabin Retreat",
      description: "A peaceful cabin by the lake, ideal for fishing, kayaking, and relaxation.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/500276137/photo/modern-villa-interior.jpg?s=1024x1024&w=is&k=20&c=JwXlrq_S12dhA9kqUS8h6jblrN_rIPE2AY3iZ0hXvUE=",
      },
      price: 3000,
      location: "Lake Tahoe, CA",
      country: "USA"
    },
    {
      title: "Desert Oasis Home",
      description: "A stunning modern home in the desert, featuring a private pool and stunning sunset views.",
      image:{
        filename:"listingIMAGE",
        url:"https://media.istockphoto.com/id/2156338256/photo/3d-rendering-of-modern-two-story-house-with-gray-and-wood-accents-in-evening.jpg?s=1024x1024&w=is&k=20&c=SZvDQ2l2ZQLh7y2n30pAAL7zbcPf1H8dkqlraXa6XBA=",
      },
      price: 3500,
      location: "Palm Springs, CA",
      country: "USA"
    }
  ];
     

module.export={data:sampleListings};