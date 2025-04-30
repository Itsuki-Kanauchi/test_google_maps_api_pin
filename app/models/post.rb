class Post < ApplicationRecord
  geocoded_by :address
  after_validation :geocode

  validates :title, presence: true
  validates :address, presence: true
end
