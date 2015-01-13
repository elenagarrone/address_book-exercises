require 'spec_helper'

feature 'Each single contact' do

  scenario 'can be searched', js: true do
    visit '/'
    sleep(1)
    fill_in :search, with: 'ginola'
    click_on 'Search'
    expect(page).to have_content 'Ginola David'
    expect(page).not_to have_content 'Bannon Barry'
  end

end
