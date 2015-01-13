require 'spec_helper'

feature 'Each single contact' do

  scenario 'can be searched' do
    visit '/'
    fill_in :search, with: 'Ginola'
    click_on 'Search'
    expect(page).to have_content 'Ginola David'
    expect(page).not_to have_content 'Bannon Barry'
  end

end
