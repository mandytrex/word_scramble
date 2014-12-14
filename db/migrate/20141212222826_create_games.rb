class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
    	t.integer :total_score
    	t.references :user

    end
  end
end