class CreateAllocationOffenders < ActiveRecord::Migration[5.2]
  def change
    create_table :allocation_offenders do |t|
      t.string :name
      t.string :risk_level

      t.timestamps
    end
  end
end
