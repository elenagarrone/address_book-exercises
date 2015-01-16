require 'spec_helper'
require_relative 'helpers/add_contact.rb'
require_relative 'helpers/edit_contact.rb'

include AddContact; include EditContact;

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

  scenario 'can be edited', js:true do
    visit '/'
    sleep(1)
    expect(page).to have_content 'lala@lal.com'
    page.find('button[id=edit_TestE]').click
    sleep(1)
    edit_contact
    sleep(1)
    expect(page).to have_content 'test@test.com'
  end

  scenario 'can be removed', js: true do
    visit '/'
    sleep(1)
    page.find('button[id=rm_TestE]').click
    expect(page).not_to have_content 'TestE'
  end

end
