class IndependentUploader < CarrierWave::Uploader::Base

  def initialize(uploaded_file_name)
    super
    @uploaded_file_name = uploaded_file_name
  end

  if ENV['S3_ACCESS_KEY_ID'] && ENV['S3_ACCESS_KEY_SECRET'] && !Rails.env.test?
    storage :fog
  else
    storage :file
    def cache_dir
      "#{Rails.root}/spec/fixtures/uploads"
    end

    def store_dir
      "#{Rails.root}/spec/fixtures/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    end
  end

  # def store_dir
  #   "/uploads"
  # end

  # def cache_dir
  #   "/tmp/uploads"
  # end


  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process scale: [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process resize_to_fit: [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    @uploaded_file_name if @uploaded_file_name
  end

end
