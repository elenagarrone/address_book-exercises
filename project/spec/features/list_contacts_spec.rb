require 'spec_helper'

feature 'The list of the contacts' do

  scenario 'is visible on the page', js: true do
    visit '/'
    expect(page).to have_css('li')
  end

  scenario 'in alphabetical order', js: true do
    visit '/'
    sleep(1)
    expect(first('.contact')).to have_content('Bannon')
  end

  scenario 'with the informations', js: true do
    visit '/'
    expect(page).to have_content('Banana Street')
    expect(page).to have_content('07411857962')
    expect(page).to have_content('Barry@banana.org')
  end

end
