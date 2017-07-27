namespace :transaction_tester do
  desc 'wrap some items in a transaction'
  task runit: :environment do
    logger = Logger.new('log/transaction_tester_rake.log')

    ActiveRecord::Base.transaction do
      10.times do
        product = Product.create(name: FFaker::Product.product_name)
        logger.info "product created: #{product.name}, #{product.id}"

        screening = Screening.create(name: FFaker::DizzleIpsum.word)
        logger.info "screening created: #{screening.name}, #{screening.id}"
      end

      products_to_update = Product.last(10)
      products_to_update.first(5).each { |product| product.name = "#{product.name} taco" }
      binding.pry
      products_to_update.each(&:save!)
      raise "tacos are dangerous"
    end #end transaction wrapper
    puts "all done"
  end
end
