# frozen_string_literal: true

module Archivable
  extend ActiveSupport::Concern

  included do
    scope :archived, -> { where('archived_at != ?', nil) }
    scope :active, -> { where('archived_at = ?', nil) }
  end
end
