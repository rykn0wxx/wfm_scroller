# == Schema Information
#
# Table name: regions
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  code       :string(3)
#  is_active  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Region < ApplicationRecord
  has_many :projects, :dependent => :destroy
  accepts_nested_attributes_for :projects, allow_destroy: true, reject_if: proc { |att| att['name'].blank? }

  validates :name, presence: true
  validates :code, presence: true, length: { maximum: 3 }
end
