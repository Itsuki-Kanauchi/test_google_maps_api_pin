10.times do |n|
  latitude = Faker::Address.latitude.to_f
  longitude = Faker::Address.longitude.to_f
  Post.create!(
    title: "Example Title #{n + 1}",
    address: "Example Address #{n + 1}",
    latitude: latitude,
    longitude: longitude,
  )
end
