class Trinket < ActiveRecord::Base
  mount_uploader :image, TrinketImageUploader
  has_many :comments

  validate :image_exists

  private

  def image_exists
    if image
      url = "#{ENV['S3_BASE_URL']}#{ENV['S3_BUCKET_NAME']}/#{image.filename}"
      uri = URI(url)
      binding.pry
      request = Net::HTTP.new uri.host
      response= request.request_head uri.path
      code = response.code.to_i == 200
    end
  end
end
