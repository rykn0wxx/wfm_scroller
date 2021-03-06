# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  name       :string
#  content    :text
#  published  :boolean
#  valid_to   :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord

  validates :name, presence: true
  validates :content, presence: true
  validates :published, presence: true
  validates :valid_to, presence: true
end
