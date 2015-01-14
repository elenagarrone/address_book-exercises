require 'spec_helper'
require_relative 'helpers/add_contact.rb'

include AddContact;

feature 'A contact' do

  scenario 'can be searched', js: true do
    visit '/'
    sleep(2)
    fill_in :search, with: 'ginola'
    click_on 'Search'
    expect(page).to have_content 'Ginola David'
    expect(page).not_to have_content 'Bannon Barry'
  end

  scenario 'can be added', js: true do
    visit '/'
    sleep(2)
    add_contact
    sleep(1)
    expect(page).to have_content 'TestE'
  end

  # scenario 'can be remote', js: true do
  #   visit '/'
  # end

end
