class PagesController < ApplicationController
  def home
  end

  def about
  end

  def lipsum
  end

  def paver
  end

  def filter
  end

  def image_uploader
  end

  def image_exists
    if params[:image_name]
      url = "#{ENV['S3_BASE_URL']}#{ENV['S3_BUCKET_NAME']}/#{params[:image_name]}"
      uri = URI(url)

      request = Net::HTTP.new uri.host
      response= request.request_head uri.path
      code = response.code.to_i == 200
    end
    redirect_to image_uploader_path(exists: code, image_name: params[:image_name])
  end

  def upload_image
    if params[:image].present?
      uploader = IndependentUploader.new(params[:image].original_filename)
      # binding.pry
      # File.open(params[:image]) do |file|
      File.open(params[:image].tempfile) do |file|
      # params[:image].read do |file|
        something = uploader.store!(file)
      end
      # uploader.store!(params[:image].read)
      # retrieve = uploader.retrieve_from_store!(self.file_name)
      # retrieve = uploader.retrieve_from_store!(self)
      # binding.pry
      # retrieve
    end
    redirect_to image_uploader_path, notice: "successful upload"
  end

  def awaiting_confirmation
  end
end
