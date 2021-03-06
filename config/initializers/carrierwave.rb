CarrierWave.configure do |config|
  if ENV['S3_ACCESS_KEY_ID'] && ENV['S3_ACCESS_KEY_SECRET'] && !Rails.env.test?
    config.fog_provider = 'fog/aws'                        # required
    config.fog_credentials = {
      provider:              'AWS',                        # required
      aws_access_key_id:     ENV['S3_ACCESS_KEY_ID'],      # required
      aws_secret_access_key: ENV['S3_ACCESS_KEY_SECRET'],  # required
      region:                'us-east-2'                  # optional, defaults to 'us-east-1'
      # host:                  's3.example.com',             # optional, defaults to nil
      # endpoint:              'https://s3.example.com:8080' # optional, defaults to nil
    }
    config.fog_directory  = ENV['S3_BUCKET_NAME']                         # required
    # config.fog_public     = false                                        # optional, defaults to true
    # config.fog_attributes = { 'Cache-Control' => "max-age=#{365.day.to_i}" } # optional, defaults to {}
  else
    config.enable_processing = false
    config.storage = :file
  end
end
