class RenameAddlessToAddressInPosts < ActiveRecord::Migration[7.2]
  def change
    rename_column :posts, :addless, :address
  end
end
