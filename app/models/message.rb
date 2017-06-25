# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  name       :string
#  content    :text
#  published  :boolean
#  valid_to   :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
end
