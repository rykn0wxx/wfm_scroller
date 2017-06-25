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

require 'test_helper'

class RegionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
