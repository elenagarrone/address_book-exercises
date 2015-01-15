require 'spec_helper'
require_relative 'helpers/add_contact.rb'

include AddContact;

feature 'A contact' do

  scenario 'can be searched', js: true do
    visit '/'
    sleep(3)
    fill_in :search, with: 'ginola'
    click_on 'Search'
    expect(page).to have_content 'David Ginola'
    expect(page).not_to have_content 'Barry Bannon'
  end

  scenario 'can be added', js: true do
    visit '/'
    sleep(2)
    add_contact
    sleep(1)
    expect(page).to have_content 'TestE'
  end

  scenario 'can be removed', js: true do
    visit '/'
    sleep(1)
    click_on 'Remove TestE'
    expect(page).not_to have_content('TestE')
  end

end
