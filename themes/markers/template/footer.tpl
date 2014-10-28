<div id="copyright">
  {if isset($debug.TIME)}
    {'Page generated in'|translate} {$debug.TIME} ({$debug.NB_QUERIES} {'SQL queries in'|translate} {$debug.SQL_TIME}) -
  {/if}

{*
    Please, do not remove this copyright. If you really want to,
    contact us on http://piwigo.org to find a solution on how
    to show the origin of the script...
*}

  {'Powered by'|translate}	<a href="{$PHPWG_URL}" class="Piwigo">Piwigo</a>
  {$VERSION}
  {if isset($CONTACT_MAIL)}
  - <a href="mailto:{$CONTACT_MAIL}?subject={'A comment on your site'|translate|@escape:url}">{'Contact webmaster'|translate}</a>
  {/if}
  {if isset($TOGGLE_MOBILE_THEME_URL)}
  - {'View in'|translate} : <a href="{$TOGGLE_MOBILE_THEME_URL}">{'Mobile'|translate}</a> | <b>{'Desktop'|translate}</b>
  {/if}
  
  {if isset($footer_elements)}
  {foreach from=$footer_elements item=elt}
    {$elt}
  {/foreach}
  {/if}
</div>{* <!-- copyright --> *}

{if isset($debug.QUERIES_LIST)}
<div id="debug">
  {$debug.QUERIES_LIST}
</div>
{/if}
</div>{* <!-- the_page --> *}
<div id="ohcFooter">
			<div id="endcontainer"></div>
			<div id="footer" class="container">
				<div class="container">
					<div class="footer-nav" id="footer-nav-1">
						<ul>
							<li><a href="http://www.ohiohistory.org/museums/location">Map of Locations</a></li>
							<li><a href="http://www.ohiohistory.org/about-us/contact">Contact Us</a></li>
							<li><a href="http://www.ohiohistory.org/faqs">FAQ</a></li>
							<li><a href="http://www.ohiohistory.org/about-us/website/sitemap">Web Site Map</a></li>
							<li><a href="http://www.youtube.com/ohiohistory">OHS Video Channel</a></li>
							<ul class="social-media-links">
									<li id="facebook"><a href="http://www.facebook.com/pages/Ohio-Historical-Society/22003234344">Facebook</a></li>
									<li id="twitter"><a href="https://twitter.com/ohiohistory">Twitter</a></li>
									<li id="youtube"><a href="http://www.youtube.com/ohiohistory">YouTube</a></li>
									<li id="enews"><a href="http://www.ohiohistory.org/enews">Histore-news</a></li>
							</ul>
						</ul>
					</div>
				<div class="footer-nav" id="footer-nav-3">
					<ul>
						<li><a href="http://www.ohiohistory.org/jobs/current-openings">Jobs</a></li>
						<li><a href="http://www.ohiohistory.org/volunteer-department/new-volunteers">Volunteer</a></li>
						<li><a href="http://www.ohiohistory.org/about-us/advocacy">Advocacy</a></li>
						<li><a href="http://www.ohiohistory.org/programs--events/event-rental">Facility Rental</a></li>
						<li><a href="http://www.ohiohistory.org/museums/ohc">Ohio History Center</a></li>
					</ul>

				</div>
				<div class="footer-nav" id="footer-nav-3">
					<ul>
						<li><a href="http://www.ohiohistory.org/about-us">About us</a></li>
						<li><a href="http://www.ohiohistory.org/e-news">Ohio HistorE-News</a></li>
						<li><a href="http://www.ohiohistory.org/about-us/newsroom">Newsroom</a></li>
						<li><a href="http://www.ohiohistory.org/about-us/fact-sheet">Fact Sheet</a></li>
						<li><a href="http://www.ohiohistory.org/about-us/privacy-policy">Privacy Policy</a></li>
					</ul>
				</div>
				<div style="align:center; position:absolute; text-align:center; margin-left:34em;margin-top:12em;" valign="bottom"><small>800 E. 17<sup>th</sup> Ave. Columbus, OH 43211
				<br>
				(614) 297-2300
				</small>
				</div>
			</div>
		</div>
</div>
<!-- BEGIN get_combined -->
{get_combined_scripts load='footer'}
<!-- END get_combined -->

</body>
</html>