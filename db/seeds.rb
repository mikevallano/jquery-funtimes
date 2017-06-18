50.times do
  product = Product.create(name: FFaker::Product.product_name)
  puts "product created: #{product.name}"

  category = Category.create(name: FFaker::DizzleIpsum.word)
  puts "category created: #{category.name}"
end


