require 'spec_helper'

feature 'The list of all the contacts' do

  scenario 'is visible on the page', js: true do
    visit '/'
    expect(page).to have_css('li')
  end

  scenario 'in alphabetical order', js: true do
    visit '/'
    sleep(3)
    expect(first('li')).to have_content('Assia')
  end

  scenario 'with the informations', js: true do
    visit '/'
    sleep(1)
    expect(page).to have_content('Asia Street')
    expect(page).to have_content('09239328')
    expect(page).to have_content('Asia@asua.com')
  end

  scenario 'after the search, you can see all the contacts by pressing a button', js: true do
    visit '/'
    sleep(3)
    fill_in :search, with: 'ginola'
    click_on 'Search'
    click_on 'Show all'
    expect(page).to have_content 'David Ginola'
    expect(page).to have_content 'Asia Assia'
  end

end
