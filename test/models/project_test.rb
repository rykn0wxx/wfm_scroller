# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  region_id  :integer
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_projects_on_region_id  (region_id)
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
