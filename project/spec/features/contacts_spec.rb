require 'spec_helper'

feature 'The list of the contacts' do

  scenario 'is visible on the page', js: true do
    visit '/'
    expect(page).to have_css('li')
  end

  scenario 'in alphabetical order', js: true do
    visit '/'
    expect(first('.contact')).to have_content('Bannon')
  end

end
